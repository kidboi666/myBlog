import { FormEvent, RefObject, useCallback, useEffect, useState } from "react"
import { useInput } from "@/src/hooks/useInput"
import cn from "@/src/lib/cn"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { TextInput } from "../../shared/TextInput"
import { Text } from "../../shared/Text"
import { Xicon } from "../../icon/XIcon"
import { Button } from "../../shared/Button"
import { PencilIcon } from "../../icon/PencilIcon"
import { Title } from "../../shared/Title"
import { Line } from "../../shared/Line"

interface TodoProps {
  todo: string
  onDelete?: (selectedTodo: string) => void
  onSuccess?: (selectedTodo: string) => void
}

const Todo = ({ todo, onDelete, onSuccess }: TodoProps) => {
  return (
    <List.Row>
      <Text
        className={cn(
          "flex items-center justify-between gap-4 text-xs",
          onDelete && onSuccess ? "" : "text-slate-400",
        )}
      >
        {todo}
        {onDelete && onSuccess ? (
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => onSuccess!(todo)}
              className="rounded-full px-1 py-0 ring-0"
            >
              <PencilIcon className="size-4" />
            </Button>
            <Button
              onClick={() => onDelete!(todo)}
              variant="secondary"
              className="rounded-full px-1 py-0 ring-0"
            >
              <Xicon />
            </Button>
          </div>
        ) : null}
      </Text>
    </List.Row>
  )
}

interface Props {
  className?: string
  statusRef: RefObject<HTMLDivElement>
}

export const Todos = ({ className, statusRef }: Props) => {
  const [todoText, onChangeTodoText, setTodoText] = useInput("")
  const [todos, setTodos] = useState<string[]>([])
  const [successTodos, setSuccessTodos] = useState<string[]>([])

  const handleTodoChange = (e: FormEvent) => {
    e.preventDefault()
    const nextTodos = [...todos, todoText]
    setTodos(nextTodos)
    localStorage.setItem("todos", JSON.stringify(nextTodos))
  }

  const handleDeleteButtonClick = useCallback(
    (selectedTodo: string) => {
      const nextTodos = todos.filter((todo) => todo !== selectedTodo)

      localStorage.setItem("todos", JSON.stringify(nextTodos))
      setTodos(nextTodos)
    },
    [todos],
  )

  const handleSuccessButtonClick = (selectedTodo: string) => {
    const nextTodos = todos.filter((todo) => todo !== selectedTodo)
    const nextSuccessTodos = [...successTodos, selectedTodo]
    localStorage.setItem("todos", JSON.stringify(nextTodos))
    localStorage.setItem("successTodos", JSON.stringify(nextSuccessTodos))
    setTodos(nextTodos)
    setSuccessTodos((prev) => [...prev, selectedTodo])
  }

  useEffect(() => {
    if (todos.length === 0) {
      const prevTodos = JSON.parse(localStorage.getItem("todos")!) || []
      setTodos([...prevTodos])
    }
    if (successTodos.length === 0) {
      const prevSuccessTodos = JSON.parse(localStorage.getItem("successTodos")!) || []
      setSuccessTodos([...prevSuccessTodos])
    }
  }, [])

  useEffect(() => {
    return () => {
      setTodoText("")
    }
  }, [todos])

  return (
    <Container
      variant="dropdown"
      ref={statusRef}
      dataStatus="closed"
      className={cn(
        "right-0 top-full w-96 cursor-default max-md:fixed max-md:left-1/2 max-md:w-[calc(100dvw-40px)] max-md:-translate-x-1/2",
        className,
      )}
    >
      <form onSubmit={handleTodoChange} className="w-full">
        <TextInput
          variant="secondary"
          value={todoText}
          onChange={onChangeTodoText}
          className="w-full font-light"
        />
        <div className="mt-4 flex flex-col text-left">
          <Title variant="sub">Task</Title>
          <List>
            {todos.map((todo) => (
              <Todo
                key={todo}
                todo={todo}
                onDelete={handleDeleteButtonClick}
                onSuccess={handleSuccessButtonClick}
              />
            ))}
          </List>
          <Line className="my-4" />
          <Title variant="sub">Success</Title>
          <List>
            {successTodos.map((todo) => (
              <Todo key={todo} todo={todo} />
            ))}
          </List>
        </div>
      </form>
    </Container>
  )
}
