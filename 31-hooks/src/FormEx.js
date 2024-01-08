import { useForm } from 'react-hook-form';

function FormEx() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    // console.log('errors >>> ', errors);
    console.log('watch username >>', watch());

    const onValid = (data) => {
        console.log('onValid', data);
    };
    const onInValid = (err) => {
        console.log('onInValid', err);
    };

    return (
        <>
            <h1>Form 실습1</h1>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input
                    type="text"
                    placeholder="이름"
                    {...register('name', {
                        required: '이름은 필수 항목입니다.',
                    })}
                />
                {errors.name?.message}
                <br />
                <input
                    type="text"
                    placeholder="나이"
                    {...register('age', {
                        validate: {
                            useAge: (value) => {
                                return (
                                    value <= 0 && '0이상의 숫자를 입력해 주세요'
                                );
                            },
                        },
                    })}
                />
                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </form>
        </>
    );
}

export default FormEx;
