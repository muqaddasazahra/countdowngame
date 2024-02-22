import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal=forwardRef(function ResultModal({ targetTime, remainingTime,onReset}, ref)
{   const dialog=useRef();
    const hasLost= remainingTime<=0;
    const score=Math.round((1-remainingTime/(targetTime*1000))*100);
    const formattedRemainingtime=(remainingTime/1000).toFixed(2);
    useImperativeHandle(ref, ()=>
    {
        return{
            open()
            {
             dialog.current.showModal();
            }
        }
    })
    return <dialog ref={dialog} className="result-modal">
        {hasLost && <h2>you lost</h2>}
        {!hasLost && <h2>your score : {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong> {formattedRemainingtime} seconds left</strong></p>
        <form onSubmit={onReset} method="dialog">
        <button >Close</button>
        </form>
    </dialog>
}
)
export default ResultModal;