import { useState } from 'react';
import { motion } from 'framer-motion';
import MainFeature from '../components/MainFeature';

const Home = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'today', label: 'Today' },
    { id: 'completed', label: 'Completed' }
  ];
  
  return (
    <div className="space-y-8">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Never Miss a <span className="text-gradient">Task</span> Again
        </motion.h1>
        <motion.p 
          className="text-surface-600 dark:text-surface-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          TaskPing helps you stay on top of your deadlines with smart notifications
        </motion.p>
      </section>
      
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div 
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MainFeature />
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card p-5 h-full">
            <div className="flex border-b border-surface-200 dark:border-surface-700 mb-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium text-sm relative ${
                    activeTab === tab.id 
                      ? 'text-primary dark:text-primary-light' 
                      : 'text-surface-500 hover:text-surface-800 dark:hover:text-surface-200'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-primary-light"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="space-y-3">
              {activeTab === 'upcoming' && (
                <>
                  <TaskItem 
                    title="Project Proposal" 
                    date="Tomorrow, 3:00 PM" 
                    priority="high"
                  />
                  <TaskItem 
                    title="Team Meeting" 
                    date="Friday, 10:00 AM" 
                    priority="medium"
                  />
                  <TaskItem 
                    title="Client Presentation" 
                    date="Next Monday, 2:30 PM" 
                    priority="high"
                  />
                </>
              )}
              
              {activeTab === 'today' && (
                <>
                  <TaskItem 
                    title="Review Documentation" 
                    date="Today, 5:00 PM" 
                    priority="medium"
                  />
                  <TaskItem 
                    title="Submit Weekly Report" 
                    date="Today, 6:00 PM" 
                    priority="high"
                  />
                </>
              )}
              
              {activeTab === 'completed' && (
                <>
                  <TaskItem 
                    title="Update Website Content" 
                    date="Yesterday, 2:00 PM" 
                    priority="medium"
                    completed
                  />
                  <TaskItem 
                    title="Send Invoice" 
                    date="Yesterday, 11:30 AM" 
                    priority="high"
                    completed
                  />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TaskItem = ({ title, date, priority, completed = false }) => {
  const priorityClasses = {
    high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  };
  
  return (
    <div className={`p-3 rounded-lg border ${
      completed 
        ? 'border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50' 
        : 'border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-full mr-3 ${
            completed 
              ? 'bg-surface-300 dark:bg-surface-600' 
              : priority === 'high' 
                ? 'bg-red-500' 
                : priority === 'medium' 
                  ? 'bg-yellow-500' 
                  : 'bg-green-500'
          }`} />
          <div>
            <h3 className={`font-medium ${
              completed ? 'line-through text-surface-500 dark:text-surface-400' : ''
            }`}>{title}</h3>
            <p className="text-xs text-surface-500 dark:text-surface-400">{date}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityClasses[priority]}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};

export default Home;