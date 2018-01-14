var Calculator = require('../../public/js/calculator.js')
var test = require('selenium-webdriver/testing')
var webdriver = require('selenium-webdriver')
var chrome = require('selenium-webdriver/chrome')
var assert = require('assert')
var driver = new webdriver.Builder()
driver.forBrowser(‘chrome’)

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
	it('has a previousOperator that starts at null', function() {
		assert.equal(calculator.previousOperator, null);
	})

	it('has a previousTotal that starts at 0', function() {
		assert.equal(calculator.previousTotal, 0);
	})

	it('has a newTotal that starts at true', function() {
		assert.equal(calculator.newTotal, true);
	})

	it('has a runningTotal that starts at 0', function() {
		assert.equal(calculator.runningTotal, 0);
	})

	it('can add numbers', function() {
		calculator.add(4);
		assert.equal(calculator.runningTotal, 4);
	})

	it('can subtract numbers', function() {
		calculator.subtract(2);
		assert.equal(calculator.runningTotal, -2);
	})

	it('can multiple numbers', function() {
		calculator.previousTotal = 4;
		calculator.multiply(4);
		assert.equal(calculator.runningTotal, 16);
	})

	it('can divide numbers', function() {
		calculator.previousTotal = 4;
		calculator.divide(4);
		assert.equal(calculator.runningTotal, 1);
	})

	it('has a numberClick function that resets newTotal and sets runningTotal equal to argumenet', function() {
		calculator.runningTotal = 4;
		calculator.newTotal = true;
		calculator.numberClick(2);
		assert.equal(calculator.runningTotal, 2);
		assert.equal(calculator.newTotal, false);
	})

	it('has a clearClick function that resets previousOperator, previousTotal if runningTotal = 0', function() {
		calculator.previousOperator = '+';
		calculator.previousTotal = 4;
		calculator.clearClick();
		assert.equal(calculator.previousOperator, null);
		assert.equal(calculator.previousTotal, null);
		assert.equal(calculator.runningTotal, 0);
	})

	it('has a clearClick function that resets runningTotal if it is not 0', function() {
		calculator.runningTotal = 4;
		calculator.clearClick();
		assert.equal(calculator.runningTotal, 0);
	})

	// it('has an operatorClick function that takes an operator and uses it on the previousTotal'

	// it('has a previousTotal that updates', function() {
	// 	calculator.subtract(2);
	// 	assert.equal(calculator.previousTotal, -2);
	// })

});

test.describe('Integration test', function(){

    test.before(function(){
				driver.build();
        driver.get('http://localhost:4444/wd/hub');
        driver.findElement(webdriver.By.id(username)).sendKeys(my_username);
        driver.findElement(webdriver.By.id(submit)).click();
    });

    test.after(function(){
        driver.quit();
    });

    test.it( 'Test Case' , function(){

        driver.getTitle().then(function(title){
            expect(title).equals(my_title);
        })

        driver.sleep();
    });

});
