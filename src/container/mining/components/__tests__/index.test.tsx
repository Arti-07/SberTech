import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';

describe('Heading', () => {
    test('test jest', () => {
        const children = 'Hello';
        render(<h1>{children}</h1>);
        const headingEl = screen.getByText(children);
        expect(headingEl).toBeInTheDocument();
    });
});

