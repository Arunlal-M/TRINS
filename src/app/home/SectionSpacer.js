import React from 'react';

/**
 * A component that provides proper spacing between magnetic sections
 * This helps ensure that sections have appropriate visual separation
 * while still allowing the magnetic scrolling effect to work properly
 */
const SectionSpacer = ({ height = 'h-64' }) => {
  return <div className={`w-full ${height} bg-transparent section-spacer`}></div>;
};

export default SectionSpacer;
