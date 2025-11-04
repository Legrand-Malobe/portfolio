// import { render, screen } from '@testing-library/react';
// import type { RecentWorkType } from "../../../types/sectionTypes";
// import SingleWork from "./SingleWork";

// describe(SingleWork, () => {
//   const mockWork: RecentWorkType = {
//     id: 1,
//     title: 'Test Project',
//     description: 'This is a test project description.',
//     image: 'test-image.jpg',
//     website: 'https://example.com',
//     isReversed: false,
//   };

//   it('renders the component with the correct content', () => {
//     const { container } = render(<SingleWork work={ mockWork } />);

//     // Vérifie que le titre est affiché
//     expect(screen.getByText('Test Project')).toBeInTheDocument();

//     // Vérifie que la description est affichée
//     expect(screen.getByText('This is a test project description.')).toBeInTheDocument();

//     // Vérifie que le bouton "Visit" est affiché
//     expect(screen.getByRole('button', { name: /visit/i })).toBeInTheDocument();

//     // Vérifie que l'image est affichée
//     const imageDiv = screen.getByRole('img', { hidden: true });
//     expect(imageDiv).toHaveStyle(`background-image: url(${mockWork.image})`);
//   });
// })