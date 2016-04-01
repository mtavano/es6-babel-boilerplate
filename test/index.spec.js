import chai from 'chai';
import dotenv from 'dotenv';

dotenv.config({ silent: process.env.NODEJS_ENV !== 'development'});

chai.should();

describe('First test', () => {
  it('Should pass the test', () => {
    const helloWorld = 'Hello World';

    helloWorld.should.to.equal('Hello World');
  });
});
