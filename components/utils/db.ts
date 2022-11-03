import TypeDb from '../../types/typeDb'

const db:Array<TypeDb> = [
{
    id:1,
    type:'pix',
    amount:100.21,
    date:'2020-01-01',
    description:'pizza galera',
    operation:'credit'
},
{
    id:2,
    type:'debit',
    amount:40.01,
    date:'2020-01-10',
    description:'gas',
    operation:'debit'
},
{
    id:3,
    type:'card',
    amount:600.41,
    date:'2020-01-50',
    description:'rent',
    operation:'debit'
},
{
    id:4,
    type:'ted',
    amount:15000.55,
    date:'2020-01-10',
    description:'Salário',
    operation:'credit'
},
{
    id:5,
    type:'pix',
    amount:300,
    date:'2020-01-25',
    description:'groceries',
    operation:'debit'
},
{
    id:6,
    type:'debit',
    amount:300.35,
    date:'2020-01-18',
    description:'restaurant',
    operation:'debit'
},
{
    id:7,
    type:'card',
    amount:900.99,
    date:'2020-01-05',
    description:'car',
    operation:'debit'
},
{
    id:8,
    type:'pix',
    amount:150.85,
    date:'2020-01-12',
    description:'taxes',
    operation:'credit'
},

]

export default db;