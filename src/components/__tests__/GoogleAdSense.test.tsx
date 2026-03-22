import { render } from '@testing-library/react';
import GoogleAdSense from '../GoogleAdSense';

describe('GoogleAdSense Component', () => {
    it('does not render anything when commented out (광고자리)', () => {
        const { container } = render(<GoogleAdSense />);
        expect(container.firstChild).toBeNull();
    });
});
