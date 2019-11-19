const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../server');
 //end of server file, export app
 chai.use(chaiHTTP);

 describe('server tests', () => {
     it('should do this shit', () => {
        //expectations
        //chai.expect(true).to.equal(true);
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.text).to.eq('Hello, World!');
                done();
            })
     });
     
 });