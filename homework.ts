
// -------------------------------------------------------------------------------------------------------------------------

interface IMission {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string,
    },
    links: ILinks,
    rocket: {
        rocket_name: string,
        first_stage: IFirstStage,
        second_stage: ISecondStage
    };
}

interface ILinks {
    article_link: null,
    video_link: string
}

interface IFirstStage {
    cores: ICoresItems[];
}

interface ICoresItems {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

interface ISecondStage {
    payloads: IPayloadsItem[];
}

interface IPayloadsItem {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

// ------------------------------------------------------------------------------------------------------------

// 2) протипизировать функции:

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number) : void {
    console.log(a + b);
}

interface IUser {name: string, age: number, gender: string}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser
}

const user = {
    name:"Max",
    age:18,
    gender:'male'
}

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);



