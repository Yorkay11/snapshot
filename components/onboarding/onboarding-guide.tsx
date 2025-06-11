'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  target: string;
  content: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const steps: Step[] = [
  {
    target: '.navbar',
    content: 'Bienvenue sur Ultra-Times Snapshot ! Commençons par explorer l\'interface.',
    placement: 'bottom',
  },
  {
    target: '.wallet-info',
    content: 'Votre profil et votre solde UOS sont affichés ici.',
    placement: 'bottom',
  },
  {
    target: '.notifications',
    content: 'Consultez vos notifications ici.',
    placement: 'bottom',
  },
  {
    target: '.sidebar',
    content: 'La barre latérale vous permet de naviguer entre les différentes sections.',
    placement: 'right',
  },
  {
    target: '.create-job-button',
    content: 'Créez votre premier job en cliquant ici !',
    placement: 'right',
  },
  {
    target: '.dashboard-stats',
    content: 'Consultez vos statistiques et l\'état de vos jobs ici.',
    placement: 'bottom',
  },
  {
    target: '.active-jobs',
    content: 'Suivez l\'avancement de vos jobs actifs.',
    placement: 'left',
  },
  {
    target: '.snapshot-history',
    content: 'Retrouvez l\'historique de tous vos snapshots ici.',
    placement: 'top',
  },
];

export function OnboardingGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('hasSeenGuide');
    if (!hasSeenGuide && pathname === '/dashboard') {
      setIsVisible(true);
    }
  }, [pathname]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenGuide', 'true');
  };

  const handleSkip = () => {
    handleFinish();
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];
  const targetElement = document.querySelector(currentStepData.target);

  if (!targetElement) return null;

  const rect = targetElement.getBoundingClientRect();
  const tooltipStyle = {
    position: 'fixed' as const,
    zIndex: 1000,
    ...getTooltipPosition(rect, currentStepData.placement),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={handleSkip}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="absolute bg-[#28274A] text-white rounded-lg p-4 shadow-lg max-w-sm"
          style={tooltipStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="text-sm text-white/70 mb-1">
                Étape {currentStep + 1} sur {steps.length}
              </div>
              <p className="text-white">{currentStepData.content}</p>
            </div>
            <button
              onClick={handleSkip}
              className="ml-4 text-white/70 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center text-white/70 hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Précédent
            </button>
            <button
              onClick={handleNext}
              className="bg-[#AC46E7] text-white px-4 py-2 rounded-md hover:bg-[#8757B2] transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function getTooltipPosition(rect: DOMRect, placement: string) {
  const margin = 10;
  switch (placement) {
    case 'top':
      return {
        top: rect.top - margin,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -100%)',
      };
    case 'bottom':
      return {
        top: rect.bottom + margin,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, 0)',
      };
    case 'left':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left - margin,
        transform: 'translate(-100%, -50%)',
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2,
        left: rect.right + margin,
        transform: 'translate(0, -50%)',
      };
    default:
      return {};
  }
} 