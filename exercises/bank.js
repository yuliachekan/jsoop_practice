

class Bank{
	constructor(name){
		this.name = name;//takes in the name of the bank.
		this.accouns = {};//makes an object to store all accounts into
	}
	makeAccount( accountNumber){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns fals
		//otherwise makes an new Account object
		//returns the Account object that was constructed
		if(this.accounts[accountNumber]){
			return false;
		}
		return this.accounts[accountNumber] = new accountNumber();
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		if (!this.checkForAccount(accountNumber)){
			return "Account ${accountNumber} does not exist";
		}
		if (this.accounts[accountNumber].getAmount()){
			return "acount is not empty";
		}
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
		delete this.accounts[accountNumber];
		return 'account <accountNumber> deleted';

	}
	deposit(accountNumber, amount ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
			if (!this.checkForAccount(accountNumber)){
				return "account does not exist";
			}
			this.accounts[accountNumber].add(amount);
			return `account ${accountNumber} now has ${amount}`;
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
		if (!this.checkForAccount(accountNumber)){
			return "account does not exist";
		}
		account = this.accounts[accountNumber]
		removed = account.remove(amount);
		remaining = account.getAmount();
		return `removed ${removed} from account ${accountNumber}. It now has $[remaning]`;
	}
}