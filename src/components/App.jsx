import { Box } from './Box';
import FeedbackApp from './FeedbackApp/FeedbackApp';

export const App = () => {
  return (
    <Box as="main" p={4} background="blue">
      <FeedbackApp />
    </Box>
  );
};
