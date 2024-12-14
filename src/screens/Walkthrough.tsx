import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ChefHat, Clock, Bell } from 'lucide-react';

const steps = [
  {
    icon: ChefHat,
    title: "Track Your Food",
    description: "Keep track of your food inventory and expiration dates"
  },
  {
    icon: Clock,
    title: "Never Waste Food",
    description: "Get timely reminders before your food expires"
  },
  {
    icon: Bell,
    title: "Smart Suggestions",
    description: "Receive recipe suggestions based on your inventory"
  }
];

export default function Walkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { completeWalkthrough } = useAuth();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeWalkthrough();
      navigate('/login');
    }
  };

  const Step = steps[currentStep];
  const StepIcon = Step.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress indicators */}
      <div className="flex justify-center gap-2 pt-8">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentStep ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <StepIcon className="w-24 h-24 text-primary mb-8" />
        <h2 className="text-2xl font-bold mb-4">{Step.title}</h2>
        <p className="text-gray-600">{Step.description}</p>
      </div>

      {/* Navigation buttons */}
      <div className="p-8 space-y-4">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
        >
          {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
        </button>
        {currentStep < steps.length - 1 && (
          <button
            onClick={() => {
              completeWalkthrough();
              navigate('/login');
            }}
            className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 px-4 font-medium hover:bg-gray-200 transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}