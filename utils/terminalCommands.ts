const AVAILABLE_COMMANDS = ['help', 'about', 'skills', 'projects', 'contact', 'clear'];

export const getAutocompleteSuggestions = (input: string): string[] => {
  if (!input) return [];
  return AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(input.toLowerCase()));
};

export const executeCommand = (command: string) => {
  // Add visual feedback
  const feedback = document.createElement('div');
  feedback.className = 'command-feedback';
  feedback.textContent = `Executing: ${command}`;
  
  // Remove feedback after animation
  setTimeout(() => feedback.remove(), 1000);
  
  // ...rest of execution logic...
};