
import React from 'react';
import { Check } from 'lucide-react';

interface AdvantageCardProps {
  title: string;
  description: string;
  bufferComparison?: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, bufferComparison }) => {
  return (
    <div className="gradient-border bg-white p-6 rounded-xl">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <div className="p-1 rounded-full bg-green-100 text-green-600">
            <Check className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          {bufferComparison && (
            <div className="text-sm text-gray-500 italic">
              <span className="text-purple-500 font-medium">vs Buffer:</span> {bufferComparison}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
