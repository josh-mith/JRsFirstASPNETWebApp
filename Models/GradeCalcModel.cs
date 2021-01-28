using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JRsFirstASPNETWebApp.Models
{
    public class GradeCalcModel
    {
        //For whatever reason, the range 0,100 will not work. 
        //I have worked on this for two hours and I'm just turning it in at this point.
        [Required]
        [Range(0, 100)]
        public double Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public double GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public double Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public double Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public double Intex { get; set; }
    }
}
