// src/hooks/__tests__/useWeatherData.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import useWeatherData from '../useWeatherData';
import { useEffect } from 'react';
import { vi } from 'vitest';

// mock the fetchWeatherFromAPI
vi.mock('../../services/weatherService', () => ({
  fetchWeatherFromAPI: vi.fn(() =>
    Promise.resolve({
      city: 'London',
      current: { temp: 25, description: 'clear sky' },
      forecast: [{ day: 'Mon', temp: 24 }, { day: 'Tue', temp: 22 }],
    })
  ),
}));

function TestComponent() {
  const { state } = useWeatherData();

  useEffect(() => {
    // Log or assert inside here if needed
  }, [state]);

  return (
    <div>
      <p data-testid="city">{state.city}</p>
      <p data-testid="temperature">{state.current.temp}</p>
    </div>
  );
}

test('useWeatherData fetches and displays data', async () => {
  render(<TestComponent />);

  await waitFor(() => {
    expect(screen.getByTestId('city')).toHaveTextContent('London');
    expect(screen.getByTestId('temperature')).toHaveTextContent('25');
  });
});
