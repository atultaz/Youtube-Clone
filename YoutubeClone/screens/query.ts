export const listVideos = /* GraphQL */ `
  query ListVideos {
    listMovies {
      items {
        id
        title
        poster
        categories {
          items {
            categoryID
          }
        }
      }
    }
  }
`;
