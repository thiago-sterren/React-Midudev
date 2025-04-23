import { Slot } from "./Slot"

export const Board = ({board, updateEverything}) => {
  console.log("Board structure:", board)

    return (
      <section className='game'>{
        board.map((column, columnIndex) => 
          column.map((value, rowIndex) => (
            <Slot key={`${columnIndex}-${rowIndex}`}
                  columnIndex={columnIndex}
                  updateBoard={updateEverything}
            >
              {value}
            </Slot>
          ))
        )
      }  
      </section>
  )
}