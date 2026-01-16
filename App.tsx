
import React, { useState, useEffect } from 'react';
import { Grade, StudentInfo, Unit, ExerciseType } from './types';
import LoginScreen from './components/LoginScreen';
import UnitSelection from './components/UnitSelection';
import GameEngine from './components/GameEngine';
import Certificate from './components/Certificate';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleLogin = (info: StudentInfo) => {
    setStudent(info);
  };

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setIsGameOver(false);
    setScore(0);
  };

  const handleFinishGame = (finalScore: number, total: number) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setIsGameOver(true);
  };

  const handleBackToMenu = () => {
    setSelectedUnit(null);
    setIsGameOver(false);
  };

  const handleLogout = () => {
    setStudent(null);
    setSelectedUnit(null);
    setIsGameOver(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative pb-16">
      {student && <Header student={student} onLogout={handleLogout} onBack={handleBackToMenu} />}
      
      <main className="flex-grow flex items-center justify-center p-4">
        {!student ? (
          <LoginScreen onLogin={handleLogin} />
        ) : !selectedUnit ? (
          <UnitSelection grade={student.grade} onSelect={handleSelectUnit} />
        ) : isGameOver ? (
          <Certificate 
            student={student} 
            unit={selectedUnit} 
            score={score} 
            total={totalQuestions} 
            onBack={handleBackToMenu} 
          />
        ) : (
          <GameEngine 
            unit={selectedUnit} 
            mode={student.mode} 
            onFinish={handleFinishGame} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
