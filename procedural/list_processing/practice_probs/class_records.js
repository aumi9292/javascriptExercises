'use strict';

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

let getAllExams = function (data, exams) {
  Object.keys(data).forEach(student => exams.push(data[student].scores.exams));
  return exams;
};

let buildExamGroup = function (allExams, exam, number) {
  let examGroup = [exam];
  allExams.forEach(otherExam => examGroup.push(otherExam[number]));
  return examGroup;
};

let regroupExams = function (allExams) {
  allExams = [...allExams];
  let first = allExams.pop();
  return first.map((exam, number) => buildExamGroup(allExams, exam, number));
};

let avgScore = function (examSet) {
  let totals = examSet.reduce((total, curr) => total + curr);
  return Number((totals / examSet.length).toFixed(1));
};

let minScore = function (examSet) {
  return examSet.reduce((min, curr) => (curr < min ? curr : min));
};

let maxScore = function (examSet) {
  return examSet.reduce((max, curr) => (curr > max ? curr : max));
};

let getExamStats = function (groupedExams) {
  return groupedExams.map(examSet => {
    return {
      average: avgScore(examSet),
      minimum: minScore(examSet),
      maximum: maxScore(examSet),
    };
  });
};

let generateExamData = function (studentScores) {
  let allExams = regroupExams(getAllExams(studentScores, []));
  return getExamStats(allExams);
};

let getUnweightedAvgExamScore = function (scores) {
  return scores.reduce((total, current) => total + current) / scores.length;
};

let getTotalExercisePts = function (exercises) {
  return exercises.reduce((total, currEx) => total + currEx);
};

let getWeightedExamPts = function (termExamAvg) {
  const EXAM_WEIGHT = 0.65;
  return termExamAvg * EXAM_WEIGHT;
};

let getWeightedExercisePts = function (termExerciseTotal) {
  const EXERCISE_WEIGHT = 0.35;
  return termExerciseTotal * EXERCISE_WEIGHT;
};

let termAvg = function (weightedExam, weightedExercises) {
  return Math.round(weightedExam + weightedExercises);
};

let letterGrade = function (termAvg) {
  if (termAvg > 93) return 'A';
  if (85 <= termAvg && termAvg <= 92) return 'B';
  if (77 <= termAvg && termAvg <= 84) return 'C';
  if (69 <= termAvg && termAvg <= 76) return 'D';
  if (60 <= termAvg && termAvg <= 68) return 'E';
  return 'F';
};

let formatPercentAndGrade = function (termAvg, letterGrade) {
  return `${String(termAvg)} (${String(letterGrade)})`;
};

let parseScore = function (student) {
  return {
    examScores: student.scores.exams,
    exerciseScores: student.scores.exercises,
  };
};

let getStudentTotals = function (student) {
  const {examScores, exerciseScores} = parseScore(student);
  return {
    exam: getUnweightedAvgExamScore(examScores),
    exercise: getTotalExercisePts(exerciseScores),
  };
};

let getTermAvg = function (student) {
  let totals = getStudentTotals(student);
  let weightedExam = getWeightedExamPts(totals.exam);
  let weightedExercise = getWeightedExercisePts(totals.exercise);
  return termAvg(weightedExam, weightedExercise);
};

let getFormattedStudentGrade = function (student) {
  let termAvg = getTermAvg(student);
  let letter = letterGrade(termAvg);
  return formatPercentAndGrade(termAvg, letter);
};

let studentGrades = function (scores) {
  return Object.values(scores).map(student => {
    return getFormattedStudentGrade(student);
  });
};

let formatGradesAndSummaryData = function (scores) {
  return {
    studentGrades: studentGrades(scores),
    exams: generateExamData(scores),
  };
};

function generateClassRecordSummary(scores) {
  return formatGradesAndSummaryData(scores);
}

console.log(generateClassRecordSummary(studentScores));