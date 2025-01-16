import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';

describe('Heading', () => {
    test('aaa', () => {
        const children = 'Hello';
        render(<h1>{children}</h1>);
        const headingEl = screen.getByText(children);
        expect(headingEl).toBeInTheDocument();
    });
});

// import Heading from '../index';
// import { HeadingVariant } from '../types';
// describe('Heading', () => {
//   test('рендерит children', () => {
//     const children = 'Hello';
//     render(<Heading>{children}</Heading>);
//     const headingEl = screen.getByText(children);
//     expect(headingEl).toBeInTheDocument();
//   });
// });
