import { CREATE_TIME_EVENTS_REQUEST, DELETE_EVENT_REQUEST, LIST_TIME_EVENTS_REQUEST } from './constantsTimeEvents';


export function getListTimeEventsAction() {
    return ({
        type: LIST_TIME_EVENTS_REQUEST
    })
}

export function addTimeEventAction(values, onSuccess) {
  return ({
    type: CREATE_TIME_EVENTS_REQUEST,
    payload: values,
    onSuccess
  })
}

export function deleteEventAction(id, onSuccess) {
  return ({
    type: DELETE_EVENT_REQUEST,
    id,
    onSuccess
  })
}