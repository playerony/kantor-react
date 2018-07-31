import { combineReducers } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { currencies } from './currencies.reducer';
import { login } from './login.reducer';
import { fetchUser, insertUser, updateUser } from './user.reducer';
import { fetchUserCurrencies, insertUserCurrency, updateUserCurrency } from './userCurrencies.reducer';

export default combineReducers({
    currencies,
    login,
    fetchUser, insertUser, updateUser,
    fetchUserCurrencies, insertUserCurrency, updateUserCurrency
})