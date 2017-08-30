export function fetchCommits() {
  return fetch('https://api.github.com/repos/BrandwatchLtd/brandwatch-react-app/commits')
    .then(response => response.json());
}
