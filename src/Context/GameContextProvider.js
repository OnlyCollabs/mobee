import { useEffect, useState } from "react";
import { GameCtx } from "./GameContext";
import { fetchData } from "../Utilities/fetchMovie";
import { useQuery, useMutation } from 'react-query';
import { v4 as uuidv4 } from "uuid";

export const GameContextProvider = (props) => {

  const [refetchInterval, setRefetchInterval] = useState(1000);
  const initails = {
    movie: ""
  }
  const [gameState, setGameState] = useState(initails);
  const maxMovieNo = 19;

  const [createContractMutation, { data: contract }] = useMutation(
    () => {
      const id = uuidv4();
      return { id };
    },
    {
      onSuccess: () => {
        setRefetchInterval(1000);
      }
    }
  );

  const fakePoll= async(_, id) => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    const method = await fetchData().then((data) => {
      console.log(data.results[selectMovie].title);
      return data.results[selectMovie].title;
    })
    
    //console.log(method.replace(/ /g, "").length);
    //console.log(method);
  
    let status = (method.replace(/ /g, "").length > 20)?"False":method;
    return { id, status };
  }

  const { data, status } = useQuery(["poll", contract?.id], fakePoll, {
    initialData: { status: "False" },
    refetchInterval: refetchInterval,
    refetchOnWindowFocus: false,
    enabled: contract?.id,
    onSuccess: (data) => {
      console.log(data);
      if (data.status !== "False") {
        setRefetchInterval(-1);
        setGameState({movie: data.status});
        //console.log(data.status);
        //console.log(gameState);
      }
    },
  });

  useEffect(()=> {
    createContractMutation()
  }, [])

  const gameContext ={
    movie: gameState.movie
  }


  return (
    <GameCtx.Provider value={gameContext}>{props.children}</GameCtx.Provider>
  );
};
 