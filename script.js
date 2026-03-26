import { createClient } from 'contentful';

// Create client
const client = createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

// Fetch entries
client.getEntries()
  .then((response) => {
    const items = response.items;

    const container = document.getElementById('content');

    items.forEach(item => {
      const title = item.fields.title || 'No title';
      const description = item.fields.description || '';

      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(console.error);