import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '@material-ui/core';

import Title from 'components/Title';
import { getGitHubData } from 'providers/Github/useCases';

import SearchOptions from './fragments/SearchOptions';
import UserCardsArea from './fragments/UserCardsArea';

const Home = function HomeComponent() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const fetchMembers = useCallback(async () => {
    try {
      await getGitHubData().then(data => {
        setMembers(data?.organization?.membersWithRole?.edges || []);
        setFilteredMembers(data?.organization?.membersWithRole?.edges || []);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSearch = useCallback(
    (search, sort) => {
      if (search) {
        const filtered = members.filter(item => item.node.login === search);

        setFilteredMembers(filtered);
      } else setFilteredMembers(members);

      if (sort === 'FOLLOWERS') {
        const sortedMembers = filteredMembers
          .sort((a, b) =>
            a?.node?.followers?.totalCount > b?.node?.followers?.totalCount
              ? 1
              : -1,
          )
          .reverse();

        setFilteredMembers([...sortedMembers]);
      }

      if (sort === 'CONTRIBUTIONS') {
        const sortedMembers = filteredMembers
          .sort((a, b) =>
            a?.node?.contributionsCollection?.totalCommitContributions >
            b?.node?.contributionsCollection?.totalCommitContributions
              ? 1
              : -1,
          )
          .reverse();

        setFilteredMembers([...sortedMembers]);
      }

      if (sort === 'REPOS') {
        const sortedMembers = filteredMembers
          .sort((a, b) =>
            a?.node?.gists?.totalCount > b?.node?.gists?.totalCount ? 1 : -1,
          )
          .reverse();

        setFilteredMembers([...sortedMembers]);
      }
    },
    [filteredMembers, members],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchMembers(), []);

  return (
    <Container>
      <Title text="ReactJS Members and contributors" />
      <SearchOptions onSearch={handleSearch} />
      <UserCardsArea members={filteredMembers} />
    </Container>
  );
};

export default Home;
