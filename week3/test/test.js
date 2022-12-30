const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server/server');

const should = chai.should();

chai.use(chaiHttp);

let id = '63a4a86eaaa0ab71f04fb86d'

describe('get (TOKEN)', () => {
    it('should (TOKEN)', (done) => {
        chai.request(server)
            .post('/v1/users/autorization')
            .send({
                name: "Leae Graham",
                username: "Bret",
                email: "cere@april.biz",
                password:"753"
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                token = res.body.token;
                done();
            });
    });
});

describe('TASK component', () => {
    it('should create task (POST)', (done) => {
        chai.request(server)
            .post('/v1/task')
            .set('Authorization', 'Bearer ' + token)
            .send({
                title: "Upload",
                description: "Upload images",
                estimatedTime: 15,
                createdBy:"Manager"
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                done();
            });
    });

    it('should update task fild (PATCH)', (done) => {
        chai.request(server)
            .patch('/v1/task/' + id)
            .set('Authorization', 'Bearer ' + token)
            .send({
                title: "Upload",
                description: "Upload images",
                estimatedTime: 15,
                createdBy:"Manager"
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                done();
            });
    });

    it('should find all task user (GET)', (done) => {
        chai.request(server)
            .get('/v1/task/all')
            .set('Authorization', 'Bearer ' + token)
            .send({
                title: "Upload",
                description: "Upload images",
                estimatedTime: 15,
                createdBy:"Manager"
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                done();
            });
    });

    it('should find task id (GET)', (done) => {
        chai.request(server)
            .get('/v1/task')
            .set('Authorization', 'Bearer ' + token)
            .send({
                title: "Upload",
                description: "Upload images",
                estimatedTime: 15,
                createdBy:"Manager"
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                done();
            });
    })
});











