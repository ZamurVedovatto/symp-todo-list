import styled from 'styled-components'

export const AppWrapper = styled.section`
  .navbar {
    background-color: #425C9C;
    .navbar-brand {
      img {
        border: 1px solid #d3d3d357;
        border-radius: 6px;
      }
    }
  }
  .main-content {
    padding: 1rem;
  }
`

export const TaskDetailsWrapper = styled.div`
  margin: .25rem;
  .card {
    padding: 0;
    width: 100%;
    &.done {
      border-color: #00800047;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    }
    .task-dates {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: .75rem;
      color: grey;
      padding: .5rem 1rem 0;
    }
    .card-body {
      padding: .5rem 1rem;
      .card-title {
        text-align: start;
        font-weight: bold;
        margin-bottom: 0;
        &.done {
          color: seagreen;
        }
      }
      .task-urls {
        display: flex;
        align-items: flex-start;
        a {
          text-decoration: none;
          margin-right: 1rem;
          transition: color .25s ease-in-out;
          color: grey;
          font-size: .75rem;
          &:hover {
            color: #020202;
          }
        }
      }
      .todo-list, .status-list {
        padding: .5rem 0 .25rem;
        span {
          font-weight: bold;
        }
      }
    }
    .card-footer {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        margin: 0 .25rem;
      }
    }
  }
`

export const ChecklistWrapper = styled.div`
  .checked-item,
  .not-checked-item {
    margin-left: 10px;
  }
  .checked-item {
    text-decoration: line-through;
  }
`
