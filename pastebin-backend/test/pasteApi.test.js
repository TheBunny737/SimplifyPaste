const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import the Express app
const { expect } = chai;

chai.use(chaiHttp);

describe('PasteBin API Tests', () => {
  // Test cases for POST /api/paste
  describe('POST /api/paste', () => {
    it('should create a new paste', async () => {
      const res = await chai.request(app)
        .post('/api/paste')
        .send({ text: 'Sample paste text' });

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message').equal('Paste saved successfully');
      expect(res.body).to.have.property('id').to.be.a('string');
    });

    // Additional test cases for edge cases, validation, etc.
  });

  // Test cases for GET /api/paste/:id
  describe('GET /api/paste/:id', () => {
    let pasteId;

    before(async () => {
      // Create a new paste for testing GET endpoint
      const newPaste = await chai.request(app)
        .post('/api/paste')
        .send({ text: 'Testing GET endpoint' });

      pasteId = newPaste.body.id;
    });

    it('should get a paste by ID', async () => {
      const res = await chai.request(app)
        .get(`/api/paste/${pasteId}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('id').equal(pasteId);
      expect(res.body).to.have.property('text').equal('Testing GET endpoint');
    });

    // Additional test cases for edge cases, handling non-existent IDs, etc.
  });
});
