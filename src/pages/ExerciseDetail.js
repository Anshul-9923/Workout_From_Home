import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions, youTubeOptions, fetchData} from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id} = useParams();
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
      const [equipmentExercises,setEquipmentExercises]= useState([])
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com'
      const youTubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData=await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,youTubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);


    };
    fetchExercisesData();
  },[id]);

  return (
    <Box sx={{mt:{lg:'96px',xs:'60px'}}}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail