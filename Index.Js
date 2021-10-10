function gradeResult (score) // fuction คำนวนเกรด
{
    if (score >= 90)
    {
        return console.log('Grade = A ')
    }
    else if (score >= 80)
    {
        return console.log('Grade = B ' )
    }
    else if (score >= 70)
    {
        return console.log('Grade = C ' )
    }
    else if (score >= 60)
    {
        return console.log('Grade = D ' )
    }
    else
    {
        return console.log('Grade = F ')
    }
}

const showGrade = gradeResult(60);// เพิ่มค่าลงใน Parameter