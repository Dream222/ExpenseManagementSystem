const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function () {
    // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
    this.timeout('10s');

    let nightmare = null;
    let nightMareInstance = null;
    before(() => {
        nightmare = new Nightmare({ show: false });
        nightMareInstance = nightmare.goto('http://localhost:3000');
    });

    it('Check if app is launched', done => {
        nightMareInstance
            .evaluate(() => {
                return document.title;
            })
            .then((title) => {
                assert.equal(title, 'Expense Management System');
                done();
            })
    });


    it('Register', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightMareInstance = nightmare.goto('http://localhost:3000/register');
        nightMareInstance
            .evaluate(() => {
                return document.querySelectorAll('#userRegisterForm').length;
            })
            .then(function (formcount) {
                if (formcount != 1) {
                    assert.equal(33, 43);
                    done();
                } else {
                    nightMareInstance
                        .type("input[name='email']", "test12364@test.com")
                        .type("input[name='password']", "a")
                        .type("input[name='confirmpassword']", "a")
                        .click('button[type=submit]')
                        .wait(3000);
                    nightMareInstance = nightmare.goto('http://localhost:3000/login');
                    nightMareInstance
                        .evaluate(() => {
                            return document.querySelectorAll('#userLoginForm').length;
                        })
                        .then(function (count) {
                            assert.equal(count, 1);
                            done();
                        })
                        .catch(function () {
                            assert.equal(34, 44);
                            done();
                        })

                }
            })
            .catch(function () {
                assert.equal(2, 7);
                done();
            })
    });

    it('Login', done => {
        nightMareInstance = nightmare.goto('http://localhost:3000');
        nightMareInstance
            .click(".login-btn a")
            .wait(400)
            .evaluate(() => {
                return document.querySelectorAll('#userLoginForm').length;

            })
            .then((formcount) => {

                if (formcount != 1) {
                    assert.equal(31, 41);
                    done();
                } else {
                    nightMareInstance
                        .type("input[name='email']", "test1@test.com")
                        .type("input[name='password']", "a")
                        .click("button[type='submit']")
                        .wait(3000)
                        .evaluate(() => {
                            return document.querySelectorAll('#main').length;
                        })
                        .then(function (count) {
                            assert.equal(count, 1);
                            done();
                        })
                        .catch(function () {
                            assert.equal(32, 42);
                            done();
                        })
                }
            })
            .catch(function () {
                assert.equal(1, 2);
                done();
            })
    });

    it('Expense', done => {
        nightMareInstance = nightmare.goto('http://localhost:3000');
        nightMareInstance
            .click(".login-btn a")
            .wait(400)
            .evaluate(() => {
                return document.querySelectorAll('#userLoginForm').length;
            })
            .then((formcount) => {
                if (formcount != 1) {
                    assert.equal(34, 44);
                    done();
                } else {
                    nightMareInstance
                        .type("input[name='email']", "test1@test.com")
                        .type("input[name='password']", "a")
                        .click("button[type='submit']")
                        .wait(3000)
                        .evaluate(() => {
                            var element =  document.getElementById('main');
                            return document.querySelectorAll('.table.table-bordered.table-hover>tbody>tr').length;
                            // return document.documentElement.outerHTML;
                        })
                        .then(function (count) {
                            assert.equal(count, 1);
                            done();
                        })
                        .catch(function () {
                            assert.equal(35, 45);
                            done();
                        })
                }
            })
            .catch(function () {
                assert.equal(7, 8);
                done();
            })
    });

});
