# My Project Managment like Jira Project React:
  - 
  Project STarted: 2026/01/08
  
# stack i've used:
  - Tailwindcss.
  - React
  


# Some syntax that i've forgetten or issue that i've fixed which i myself fix.:
  - how to make the default value not showing or hiding on select option.
  - I've use the onSubmit instead of onClick on the form which trigger a problem.
  - Unable to track the single selection on the table rather selected all fix
  - Also unable to do the event delegation on the parent.
  - Make the default value of the input
  - Make the event delegation is user is cick outside not showa input button
  - Controlled input default input value fix.
  - during the setLocalStorage hoooks, i've facwe as soon as it's rerender that function it setting duplicate values.
    - It's due to the prev spread operator
  - as i've face the duplicate entreis, which i can solve with the check on array which have duplicate just update that.
  - i'm doing the overenginneing on the filter option which i fix now.
  - i'm facing that it shows the object but it's the array which i'm unable to access the . property.  

  >:white_check_mark: I should pass the header comps to the main inside router not on the render.
  

# Features:
  - User input
  - show on table
  - can edit the option
  - Also can cancel the option
  - make on the grid layout
  - currently implementing the feature option
  - Now implement the filter option now currently implementing the search feturea.
  - Now i've also add the 
  - Can change the priority of task of easy, medium and hard, 
  - I've make the Option priotu more robusst add with the localStorage, each list
  - Make Separate Drag and drop view.
  
  # Common Feature:
    - Add the Loading state for just react router
    - Also add the erorr page.


# Drag And Drop Feature:
  - For that i'm using the dnd library
  - I've to wrap e everything inside the dndContext.
  >:warning: I'm using teh `closestCorners` algorithm on dndContext to identify which is dragged.
  - on the useDraggable, useDroppable both are hooks we've to pass the unique id with wrap on object.
  - as useDroppable msot used property is, setNodref we can destructre is
  - for the useDroppable is multiple of:
    - id is your task's unique id
    - setNodeRef → attach to the task's div
    - listeners → spread on the div (enables drag with mouse/touch)
    - attributes → accessibility stuff
    - transform → makes it visually move while dragging 
  


# Library Used:
  - tailwindcss
  - fontawesome
  - dnd-kit/core (for the drag and drop feature)
  - 