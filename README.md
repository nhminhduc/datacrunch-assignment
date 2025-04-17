# React Component Library Assignment

This project is an implementation of a technical assignment to create a small design system using React, TypeScript, and react-aria-components. The implementation focuses on creating reusable, accessible UI components following modern best practices.

## Assignment Requirements

- Implementation of design system components based on provided Figma design
- Built with React and TypeScript
- Uses react-aria-components for accessibility
- CSS Modules for styling
- Interactive form demonstration
- Component state management

## Components

### Button Component

- Two sizes: small and medium
- Two variants: contained and outlined
- Two color themes: primary and secondary
- Support for text, text with icon, and icon-only variants
- States: active (hover, focus) and disabled

### Input Component

- Basic text input functionality
- States: focused and disabled
- Built with react-aria-components

### NumberInput Component

- Numeric input with increment/decrement buttons
- Uses the Button component for +/- controls
- States: focused and disabled
- Validation support

### Slider Component

- Interactive range selection
- Hover state support
- Synchronized with NumberInput in the demo form

## Getting Started

### Tech Stack

- React with TypeScript
- react-aria-components for accessibility
- CSS Modules for styling
- Vite for build tooling
- Testing with Vitest and React Testing Library

### Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Implementation Details

### Demo Form

The project includes a demonstration form that showcases the integration of all components:

- NumberInput and Slider components are synchronized
- Clear button resets all form values
- Submit button displays form values
- All components demonstrate proper state management

### Example Usage

```tsx
<form onSubmit={handleSubmit}>
  <NumberInput
    label="Value"
    value={numValue}
    onChange={setNumValue}
    min={0}
    max={100}
  />

  <Slider value={numValue} onChange={setNumValue} min={0} max={100} />

  <Input label="Text Input" value={textValue} onChange={setTextValue} />

  <div className={styles.buttons}>
    <Button variant="outlined" onClick={handleClear}>
      Clear
    </Button>
    <Button variant="contained" type="submit">
      Submit
    </Button>
  </div>
</form>
```

## Project Structure

```
src/
  components/     # Component implementations
    button/       # Button component with variants
    input/       # Base input component
    numberInput/ # Numeric input with controls
    slider/      # Range slider component
  App.tsx        # Demo form implementation
```

## Assignment Completion Checklist

[x] All components implemented using react-aria-components
[x] CSS Modules & TailwindCSS used for styling
[x] Button component with all required variants and states
[x] Input component with proper state handling
[x] NumberInput component with Button integration
[x] Slider component with hover states
[x] Demo form with component integration
[x] Synchronization between NumberInput and Slider
[x] Form clear and submit functionality
[x] All components properly tested
