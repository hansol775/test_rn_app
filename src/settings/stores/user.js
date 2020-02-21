import {observable, action} from "mobx";

export default class UserStore {
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @observable user_name = '김한솔';


    @action
    userNameChange(data) {
        this.user_name = data
    }

}