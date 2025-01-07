import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  constructor(private apollo: Apollo) {
  }

  getPinnedRepositories(username: string): Observable<ApolloQueryResult<any>> {
    const query = gql`
      query GetPinnedRepos($login: String!) {
        user(login: $login) {
          pinnedItems(first: 6, types: REPOSITORY) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  homepageUrl
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
