const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'characters',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


const Characters = sequelize.import(__dirname + '/character-model');
const Users = sequelize.import(__dirname + '/users-model')

Users.belongsTo(Characters);
Characters.hasMany(Users);

sequelize.sync({ force: true }).then(() => {
    Characters.create({ title:'King', first_name:'Robert', last_name:'Baratheon', epithet:'First of His Name', house:'House Baratheon', status:'alive' })
    Characters.create({ title:'Queen', first_name:'Cersei', last_name:'Baratheon', epithet:'', house:'House Lannister', status:'alive' })
    Characters.create({ title:'Lord of Winterfell', first_name:'Eddard', last_name:'Stark', epithet:'Warden of the North', house:'House Stark', status:'alive' })
    Characters.create({ title:'Lady', first_name:'Catelyn', last_name:'Stark', epithet:'', house:'House Tully', status:'alive' })
    Characters.create({ title:'Prince', first_name:'Joffrey', last_name:'Baratheon', epithet:'Heir to the Iron Throne', house:'House Baratheon', status:'alive' })
    Characters.create({ title:'', first_name:'Robb', last_name:'Stark', epithet:'Heir to Winterfell', house:'House Stark', status:'alive' })
    Characters.create({ title:'Prince', first_name:'Viserys', last_name:'', epithet:'Third of His Name, Lord of the Seven Kingdoms, The Beggar King', house:'House Targaryen', status:'alive' })
    Characters.create({ title:'Princess', first_name:'Daenerys', last_name:'Stormborn', epithet:'', house:'House Targaryen', status:'alive' })
    Characters.create({ title:'', first_name:'Sansa', last_name:'Stark', epithet:'', house:'House Stark', status:'alive' })
    Characters.create({ title:'', first_name:'Arya', last_name:'Stark', epithet:'', house:'House Stark', status:'alive' })
    Characters.create({ title:'', first_name:'Bran', last_name:'Stark', epithet:'', house:'House Stark', status:'alive' })
    Characters.create({ title:'', first_name:'Rickon', last_name:'Stark', epithet:'', house:'House Stark', status:'alive' })
    Characters.create({ title:'Princess', first_name:'Myrcella', last_name:'Baratheon', epithet:'', house:'House Baratheon', status:'alive' })
    Characters.create({ title:'Prince', first_name:'Tommen', last_name:'Baratheon', epithet:'', house:'House Baratheon', status:'alive' })
    Characters.create({ title:'', first_name:'Tywin', last_name:'Lannister', epithet:'Lord of Casterly Rock, Warden of the West, Sheild of Lannisport', house:'House Lannister', status:'alive' })
    Characters.create({ title:'Ser', first_name:'Jaime', last_name:'Lannister', epithet:'Heir to Casterly Rock, The Kingslayer', house:'House Lannister', status:'alive' })
    Characters.create({ title:'', first_name:'Tyrion', last_name:'Lannister', epithet:'The Imp', house:'House Lannister', status:'alive' })
    Characters.create({ title:'Lady', first_name:'Brienne', last_name:'Tarth', epithet:'The Maid of Tarth, The Blue, The Beauty', house:'House Tarth', status:'alive' })
    Characters.create({ title:'', first_name:'Sandor', last_name:'Clegane', epithet:'The Hound, Dog', house:'House Clegane', status:'alive' })
    Characters.create({ title:'', first_name:'Jon', last_name:'Snow', epithet:'Lord Snow, The Bastard of Winterfell', house:'', status:'alive' })

    Users.create({ first_name:'Hayden', last_name:'Lamb', username:'Baeden', email:'hlamb@email.com', password:'password1', characterInfoId: 17 })
    Users.create({ first_name:'Ren', last_name:'Joseph', username:'notSeason7', email:'rjoseph@email.com', password:'password2', characterInfoId: 8 })
    Users.create({ first_name:'Zak Aston', last_name:'Meyers', username:'astonPoolKing', email:'zameyers@email.com', password:'password3', characterInfoId: 17 })
});

module.exports = {
    Characters,
    Users
};
