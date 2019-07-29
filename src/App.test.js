import { total}  from './App'

//Mock function
//test function when you don't have access => creates a fake function
const add = jest.fn((x,y)=> x+y)



//unit test => only tests one thing
test('add', ()=> {
    expect(add (1,2)).toBe(3)
    expect(add).toHaveBeenCalledTimes(1)
    expect(add).toHaveBeenCalledWith(1, 2)
    //expect(add (5,2)).toBe(7)
}) 


//integration test => test things working toguether (i.e add & total)
console.log('you can clg here!' , total(5,20))

test('total', () => {
    expect(total(5, 20)).toBe('€25')
})