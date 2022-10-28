
import {Sub, SubsFromApi} from "../../types"
import axios from "axios"

export const getAllSubs = () => {
  return fetchSubs().then(mapSubsFromApi);

}

const fetchSubs = () => {
      return axios
        .get<SubsFromApi>("http://localhost:3000/users")
        .then((res) => res.data);
    };


    const mapSubsFromApi = (apiSubs: SubsFromApi): Array<Sub> => {
      return apiSubs.map((apiSub) => {
        const {
          nickname,
          month: monthSubs,
          profileURL: avatar,
          description,
        } = apiSub;
        return {
          nickname,
          monthSubs,
          avatar,
          description,
        };
      });
    };



//With fetch
    // const fetchSubs = (): Promise<SubsFromApi> => {
    //   return fetch("http://localhost:3000/users").then((res) => res.json());
    // };

    // const mapSubsFromApi = (apiSubs: SubsFromApi): Array<Sub> => {
    //   return apiSubs.map((apiSub) => {
    //     const {
    //       nickname,
    //       month: monthSubs,
    //       profileURL: avatar,
    //       description,
    //     } = apiSub;
    //     return {
    //       nickname,
    //       monthSubs,
    //       avatar,
    //       description,
    //     };
    //   });
    // };

    // fetchSubs().then(mapSubsFromApi).then(setSubs);

    //With axios

    // 1°
    // const fetchSubs = (): Promise<SubsFromApi> => {
    //   return axios("http://localhost:3000/users").then((res) => res.data);
    // };

    // const mapSubsFromApi = (apiSubs: SubsFromApi): Array<Sub> => {
    //   return apiSubs.map((apiSub) => {
    //     const {
    //       nickname,
    //       month: monthSubs,
    //       profileURL: avatar,
    //       description,
    //     } = apiSub;
    //     return {
    //       nickname,
    //       monthSubs,
    //       avatar,
    //       description,
    //     };
    //   });
    // };

    // fetchSubs().then(mapSubsFromApi).then(setSubs);

    // 2°


   