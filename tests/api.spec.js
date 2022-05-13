const request = require('supertest');
const app = require('../app');
const mock = jest.fn();
const mockRequest = (body = {}) => ({body});
const mockResponse = () => {
    const res = {}
    res.json = mock.mockReturnValue(res);
    res.status = mock.mockReturnValue(res);
    return res;
}

// Login
describe('GET /', () => {
    test('get form login', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user', () => {
    test('get all users', async () => {
        const response = await request(app).get('/view/user');
        expect(response.status).toBe(200);
    })
});
describe('POST /login', () => {
    test('post form login erorr', async () => {
        const response = await request(app).post('/login').send({username: 'username1gf'});
        expect(response.status).toBe(200);
    })
});
describe('POST /login', () => {
    test('post form login false', async () => {
        const response = await request(app).post('/login').send({username: 'username1gf', password: 'password1gf'});
        expect(response.status).toBe(302);
    })
});
describe('POST /login', () => {
    test('post form login true', async () => {
        const response = await request(app).post('/login').send({username: 'username1', password: 'password1'});
        expect(response.status).toBe(302);
    })
});
describe('GET /', () => {
    test('get form login after login', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(302);
    })
});

// View User
describe('GET /view/user', () => {
    test('get all users', async () => {
        const response = await request(app).get('/view/user');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user/add', () => {
    test('get form new user', async () => {
        const response = await request(app).get('/view/user/add');
        expect(response.status).toBe(200);
    })
});
// describe('post /view/user/add', () => {
//     test('post form new user true', async () => {
//         const response = await request(app).post('/view/user/add').send({username: 'usernameBaru', password: 'passwordBaru'});
//         expect(response.status).toBe(302);
//     })
// });
// describe('post /view/user/add', () => {
//     test('post form new user false', async () => {
//         const response = await request(app).post('/view/user/add').send({username: 'usernameBaru'});
//         expect(response.status).toBe(302);
//     })
// });
describe('get /view/user/:id', () => {
    test('get user by id true', async () => {
        const response = await request(app).get('/view/user/10');
        expect(response.status).toBe(200);
    })
});
describe('get /view/user/:id', () => {
    test('get user by id false', async () => {
        const response = await request(app).get('/view/user/asd');
        expect(response.status).toBe(404);
    })
});
describe('post /view/user/:id', () => {
    test('post form edit user true', async () => {
        const response = await request(app).post('/view/user/10').send({username: 'usernameBaruBanget', password: 'passwordBaruBanget'});
        expect(response.status).toBe(302);
    })
});
describe('post /view/user/:id', () => {
    test('post form edit user false', async () => {
        const response = await request(app).post('/view/user/asd').send({username: 'usernameBaruBanget'});
        expect(response.status).toBe(400);
    })
});
describe('get /view/user/delete/:id', () => {
    test('get delete user by id true', async () => {
        const response = await request(app).get('/view/user/delete/24');
        expect(response.status).toBe(302);
    })
});
describe('get /view/user/delete/:id', () => {
    test('get delete user by id false', async () => {
        const response = await request(app).get('/view/user/delete/asd');
        expect(response.status).toBe(400);
    })
});

// View Biodata
describe('GET /view/user/biodata/:id', () => {
    test('get biodata user', async () => {
        const response = await request(app).get('/view/user/biodata/8');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user/biodata/:id', () => {
    test('get biodata user', async () => {
        const response = await request(app).get('/view/user/biodata/asd');
        expect(response.status).toBe(302);
    })
});
describe('POST /view/user/biodata/:id', () => {
    test('put biodata user', async () => {
        const json = {name: "name8", country: "country8"}
        const response = await request(app).post('/view/user/biodata/6').send(json);
        expect(response.status).toBe(302);
    })
});
describe('POST/view/user/biodata/:id', () => {
    test('put biodata user', async () => {
        const json = {name: "name11", country: "country11"}
        const response = await request(app).post('/view/user/biodata/asd').send(json);
        expect(response.status).toBe(302);
    })
});
describe('POST /view/user/add/biodata/:id', () => {
    test('post biodata user', async () => {
        const json = {name: "name12", country: "country12"}
        const response = await request(app).post('/view/user/add/biodata/12').send(json);
        expect(response.status).toBe(302);
    })
});
describe('POST /view/user/add/biodata/:id', () => {
    test('post biodata user', async () => {
        const json = {name: "name8", country: "country8"}
        const response = await request(app).post('/view/user/add/biodata/12').send(json);
        expect(response.status).toBe(302);
    })
});
describe('POST/view/user/biodata/:id', () => {
    test('post biodata user', async () => {
        const json = {name: "name11", country: "country11"}
        const response = await request(app).post('/view/user/add/biodata/asd').send(json);
        expect(response.status).toBe(302);
    })
});

// View History
describe('GET /view/user/history/:id', () => {
    test('get history user true', async () => {
        const response = await request(app).get('/view/user/history/2');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user/history/:id', () => {
    test('get history user false', async () => {
        const response = await request(app).get('/view/user/history/asd');
        expect(response.status).toBe(400);
    })
});
describe('GET /view/user/history/edit/:userid/:id', () => {
    test('get history user by id true', async () => {
        const response = await request(app).get('/view/user/history/edit/8/6');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user/history/edit/:userid/:id', () => {
    test('get history user by id false', async () => {
        const response = await request(app).get('/view/user/history/edit/asd/asd');
        expect(response.status).toBe(400);
    })
});
describe('POST /view/user/history/edit/:userid/:id', () => {
    test('post history user by id true', async () => {
        const json = {game:"ninja saga", score: "85"}
        const response = await request(app).post('/view/user/history/edit/8/6').send(json);
        expect(response.status).toBe(302);
    })
});
describe('POST /view/user/history/edit/:userid/:id', () => {
    test('POST history user by id false', async () => {
        const json = {game:"ninja saga", score: "85"}
        const response = await request(app).post('/view/user/history/edit/asd/asd').send(json);
        expect(response.status).toBe(400);
    })
});
describe('GET /view/user/add/history/:id', () => {
    test('get history user true', async () => {
        const response = await request(app).get('/view/user/add/history/8');
        expect(response.status).toBe(200);
    })
});
describe('GET /view/user/add/history/:id', () => {
    test('get history user false', async () => {
        const response = await request(app).get('/view/user/history/asd');
        expect(response.status).toBe(400);
    })
});
// describe('POST /view/user/add/history/:id', () => {
//     test('post history user by id true', async () => {
//         const json = {game:"basara", score: "70"}
//         const response = await request(app).post('/view/user/add/history/8').send(json);
//         expect(response.status).toBe(302);
//     })
// });
describe('POST /view/user/add/history/:id', () => {
    test('POST history user by id false', async () => {
        const json = {game:"basara", score: "70"}
        const response = await request(app).post('/view/user/add/history/asd').send(json);
        expect(response.status).toBe(400);
    })
});
describe('GET /view/user/history/delete/:userid/:id', () => {
    test('delete history user true', async () => {
        const response = await request(app).get('/view/user/history/delete/8/9');
        expect(response.status).toBe(302);
    })
});
describe('GET /view/user/history/delete/:userid/:id', () => {
    test('delete history user false', async () => {
        const response = await request(app).get('/view/user/history/delete/asd/asd');
        expect(response.status).toBe(400);
    })
});

// API User
describe('GET /api/user', () => {
    test('get all user', async () => {
        const response = await request(app).get('/api/user');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Get All Users");
        expect(data.length).toBeGreaterThan(0);
    })
});
describe('GET /api/user/:id', () => {
    test('get user by id true', async () => {
        const response = await request(app).get('/api/user/2');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Get Id User");
        expect(data.createdAt.length).toBeGreaterThan(0);
    })
});
describe('GET /api/user/:id', () => {
    test('get user by id false', async () => {
        const response = await request(app).get('/api/user/asd');
        const {message} = response.body;
        expect(response.status).toBe(401);
        expect(message).toMatchObject(response.body.message);
    })
});
// describe('POST /api/user/', () => {
//     test('post user', async () => {
//         const json = {username: 'username3', password: 'password3'}
//         const response = await request(app).post('/api/user/').send(json);
//         const {message, data} = response.body;
//         expect(response.status).toBe(200);
//         expect(message).toBe("Success Create User");
//         expect(data.username.length).toEqual(json.username.length);
//     })
// });
describe('PUT /api/user/:id', () => {
    test('put user true', async () => {
        const json = {username: 'usernamee', password: 'passworde'}
        const response = await request(app).put('/api/user/10').send(json);
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Update User");
        expect(data[0]).toEqual(1);
    })
});
describe('PUT /api/user/:id', () => {
    test('put user false', async () => {
        const json = {username: 'usernamee', password: 'passworde'}
        const response = await request(app).put('/api/user/asd').send(json);
        const {message} = response.body;
        expect(response.status).toBe(401);
        expect(message).toMatchObject(response.body.message);
    })
});
// describe('delete /api/user/:id', () => {
//     test('delete user by id true', async () => {
//         const response = await request(app).delete('/api/user/18');
//         const {message, data} = response.body;
//         expect(response.status).toBe(200);
//         expect(data).toEqual(1);
//         expect(message).toBe("Success Delete User");
//     })
// });
describe('delete /api/user/:id', () => {
    test('delete user by id false', async () => {
        const response = await request(app).delete('/api/user/asd');
        const {message} = response.body;
        expect(response.status).toBe(401);
        expect(message).toMatchObject(response.body.message);
    })
});

// API Biodata
describe('GET /api/biodata/:id', () => {
    test('get user by id true', async () => {
        const response = await request(app).get('/api/biodata/2');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Get Biodata Users");
        expect(data.createdAt.length).toBeGreaterThan(0);
    })
});
describe('GET /api/biodata/:id', () => {
    test('get user by id true', async () => {
        const response = await request(app).get('/api/biodata/14');
        const {message} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Biodata Kosong");
    })
});
describe('GET /api/user/:id', () => {
    test('get user by id false', async () => {
        const response = await request(app).get('/api/biodata/asd');
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toMatchObject(response.body.message);
    })
});
describe('POST /api/biodata/:id', () => {
    test('POST biodata user by id no empty', async () => {
        const json = {name: "name11", country: "country11"}
        const response = await request(app).post('/api/biodata/2').send(json);
        const {message} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Biodata Sudah Terisi");
    })
});
// describe('POST /api/biodata/:id', () => {
//     test('POST biodata user by id true', async () => {
//         const json = {name: "name11", country: "country11"}
//         const response = await request(app).post('/api/biodata/13').send(json);
//         const {message, data} = response.body;
//         expect(response.status).toBe(200);
//         expect(message).toBe("Success Menambahkan Biodata");
//         expect(data.createdAt.length).toBeGreaterThan(0);
//     })
// });
describe('POST /api/biodata/:id', () => {
    test('POST biodata user by id attr null', async () => {
        const json = {}
        const response = await request(app).post('/api/biodata/13').send(json);
        expect(response.status).toBe(200);
    })
});
describe('POST /api/biodata/:id', () => {
    test('POST biodata user by id false', async () => {
        const json = {name: "name11"}
        const response = await request(app).post('/api/biodata/asd').send(json);
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toMatchObject(response.body.message);
    })
});
describe('PUT /api/biodata/:id', () => {
    test('PUT biodata user by id true', async () => {
        const json = {name: "name1Update", country: "country1Update"}
        const response = await request(app).put('/api/biodata/2').send(json);
        const {message} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Update Biodata Users");
    })
});
describe('PUT /api/biodata/:id', () => {
    test('PUT biodata user by id empty', async () => {
        const json = {name: "name11", country: "country11"}
        const response = await request(app).put('/api/biodata/14').send(json);
        const {message} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Biodata Masih Kosong");
    })
});
describe('PUT /api/biodata/:id', () => {
    test('PUT biodata user by id attr null', async () => {
        const json = {}
        const response = await request(app).put('/api/biodata/13').send(json);
        expect(response.status).toBe(200);
    })
});
describe('PUT /api/biodata/:id', () => {
    test('PUT biodata user by id false', async () => {
        const json = {name: "name11"}
        const response = await request(app).put('/api/biodata/asd').send(json);
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toMatchObject(response.body.message);
    })
});
describe('DELETE /api/biodata/:id', () => {
    test('DELETE biodata user by true', async () => {
        const response = await request(app).delete('/api/biodata/12')
        const {message} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Menghapus Biodata");
    })
});
describe('DELETE /api/biodata/:id', () => {
    test('DELETE biodata user by false', async () => {
        const response = await request(app).delete('/api/biodata/asd')
        expect(response.status).toBe(400);
    })
});

// API History
describe('GET /api/history/:id', () => {
    test('get history user by id true', async () => {
        const response = await request(app).get('/api/history/8');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Get History By Id User");
        expect(data.length).toBeGreaterThan(0);
    })
});
describe('GET /api/history/:id', () => {
    test('get history user by id false', async () => {
        const response = await request(app).get('/api/history/asd');
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toBe(response.body.message);
    })
});
describe('GET /api/history/:iduser/:id', () => {
    test('get history user by id true', async () => {
        const response = await request(app).get('/api/history/8/6');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success Get History By Id");
        expect(data.id).toBeGreaterThan(0);
    })
});
describe('GET /api/history/:iduser/:id', () => {
    test('get history user by id false', async () => {
        const response = await request(app).get('/api/history/asd/asd');
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toBe(response.body.message);
    })
});
// describe('POST /api/history/:id', () => {
//     test('post history user by id true', async () => {
//         const json = {game: "palo", score:"99"}
//         const response = await request(app).post('/api/history/8').send(json);
//         const {message, data} = response.body;
//         expect(response.status).toBe(200);
//         expect(message).toBe("Success Menambah History With Id User");
//         expect(data.id).toBeGreaterThan(0);
//     })
// });
describe('POST /api/history/:id', () => {
    test('post history user by id false', async () => {
        const json = {game: "palo", score:"99"}
        const response = await request(app).post('/api/history/asd').send(json);
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toBe(response.body.message);
    })
});
describe('DELETE /api/history/:iduser/:id', () => {
    test('delete history user by id true', async () => {
        const response = await request(app).delete('/api/history/8/11');
        const {message, data} = response.body;
        expect(response.status).toBe(200);
        expect(message).toBe("Success menghapus History By Id");
        expect(data).toBeGreaterThan(0);
    })
});
describe('DELETE /api/history/:iduser/:id', () => {
    test('delete history user by id false', async () => {
        const response = await request(app).delete('/api/history/asd/asd');
        const {message} = response.body;
        expect(response.status).toBe(400);
        expect(message).toBe(response.body.message);
    })
});
