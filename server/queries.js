const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'test1',
password: '1202',
port: 5432,
})
//CREATE TABLE Post( Post_owner  
//Title , Picture, 
//Caption );

const getPost = (request, response) => {
pool.query('SELECT * FROM Post', (error, results) => {
if (error) {
throw error
}
response.status(200).json(results.rows)
})
}


const getPosts = (request, response) => {
    pool.query('SELECT * FROM Post p INNER JOIN User_table u ON p.Post_owner = u.username ', (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
    })
    
const deletePost = (request, response) => {
const { Post_id  } = request.body
    pool.query('DELETE FROM Post WHERE Post_id = $1 A', [Post_id ], (error, results) => {
    if (error) {
    throw error
    }
    response.status(201).send('postDeleted')
    })
    }
    const createPost = (request, response) => {
        const { Post_owner, Title, post_image, Caption } = request.body;
        pool.query('INSERT INTO Post(Post_owner, Title, Picture, Caption) VALUES ($1, $2, $3, $4)', [Post_owner, Title, post_image, Caption], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send('postAdded');
        });
    };
    

        
module.exports = {
getPosts,
getPost,
createPost,
deletePost
}
}
