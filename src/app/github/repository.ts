export interface Repository {
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  isFork: boolean;
  languages: Language[];
}

export interface Language {
  name: string;
  color: string;
}

export function map(response: any): Repository[] {
  return response.data.user.pinnedItems.edges
    .map((edge: any) => edge.node)
    .map((node: any) => ({
      name: node.name,
      description: node.description,
      homepageUrl: node.homepageUrl,
      url: node.url,
      isFork: node.isFork,
      languages: node.languages.edges.map((language: any) => ({
        name: language.node.name,
        color: language.node.color
      })),
    }));
}
