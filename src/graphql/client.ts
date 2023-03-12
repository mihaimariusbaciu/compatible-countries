import { createClient  } from 'urql';

export default createClient({
  url: 'https://admin-core.test.virtaglobal.com/public',
   fetchOptions: () => {
    return {
      headers: { Origin: 'http://localhost:3000' },
    }
  },
});

