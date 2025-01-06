import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  constructor(private apollo: Apollo) {
  }

  getPinnedRepositories(username: string) {
    const query = gql`
      query GetPinnedRepos($login: String!) {
        user(login: $login) {
          pinnedItems(first: 6, types: REPOSITORY) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
                  isFork
                  languages(first: 4) {
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.apollo
      .watchQuery({query, variables: {login: username}})
      .valueChanges;
  }
}
