// Find the first 5 restaurants returning only the name

db.restaurants.find({}, {
    name: 1,
    _id: 0
}).limit(5);

// Find the name of all restaurants with at least 1 grade of A or B

db.restaurants.find({
    'grades.grade': {
        $in: ['A', 'B']
    }
}, {
    name: 1,
    _id: 0
});


// Find the name of all restaurants with at least 1 score above 20

db.restaurants.find({
    'grades.score': {
        $gte: 20
    }
}, {
    name: 1,
    _id: 0
});


// Find the unique types of cuisine in restaurants in the Bronx

db.restaurants.distinct('cuisine', {
    'borough': 'Bronx'
}, {
    cuisine: 1,
    _id: 0
});


// Find all the names and addresses of all the spanish restaurants in Queens
// Find all the names and addresses of all the restaurants in Manhattan that are not a Bakery, Spanish, Italian or Irish
// Find the name and address of the first alphabetically named Asian restaurant a grade of A
