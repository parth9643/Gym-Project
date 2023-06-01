import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, FetchData } from '../utlis/FetchData';
import Deta1 from '../Comp/Deta1';
import SimiExe1 from '../Comp/SimiExe1';

const ExeDetail = () => {
  const [temp2, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState({});
  const [equimentExercises, setEquipmentExercises] = useState({});
  const { id } = useParams();

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExeDetail = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      
      const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

      const { bodyPart, gifUrl, name, target, equipment } = exerciseDetailData;
      console.log('bodyPart:', bodyPart);
      console.log('gifUrl:', gifUrl);
      console.log('name:', name);
      console.log('target:', target);
      console.log('equipment:', equipment);

      setExerciseDetail(exerciseDetailData);

    };

    fetchExeDetail();
  }, [id]);

  return (
    <Box>
      <Deta1 {...temp2} />
      <SimiExe1 targetMuscleExercises={targetMuscleExercises} equipmentExercises={equimentExercises} />
    </Box>
  );
};

export default ExeDetail;
